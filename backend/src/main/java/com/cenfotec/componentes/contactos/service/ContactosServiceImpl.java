package com.cenfotec.componentes.contactos.service;

import com.amazonaws.services.dynamodbv2.model.ScanRequest;
import com.amazonaws.services.dynamodbv2.model.ScanResult;
import com.cenfotec.componentes.contactos.entity.Contacto;
import com.cenfotec.componentes.contactos.mapper.SQSEmailNotificationEventMapper;
import com.cenfotec.componentes.contactos.pubsub.event.AddNewContactEvent;
import com.cenfotec.componentes.contactos.pubsub.publisher.EmailNotificationPublisher;
import com.cenfotec.componentes.contactos.repository.ContactosRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ContactosServiceImpl implements ContactosService{

    Logger logger = LoggerFactory.getLogger(this.getClass());

    private final ContactosRepository contactosRepository;
    private final SQSEmailNotificationEventMapper emailNotificationEventMapper;
    private final EmailNotificationPublisher emailNotificationPublisher;

    @Override
    public void save(Contacto contacto) {
        logger.info(">>> Iniciando proceso de salvar contacto");
        contactosRepository.save(contacto);
        initiateEmailNotificationEvent(contacto);
    }

    @Override
    public void update(Contacto contacto) {
        logger.info(">>> Iniciando proceso de modificar un contacto");
        contactosRepository.update(contacto);
        initiateEmailNotificationEvent(contacto);
    }

    @Override
    public Contacto getContactoById(String id) {
        logger.info(">>> Iniciando proceso de obtener un contacto");
        Contacto contacto = contactosRepository.getContacto(id);
        initiateEmailNotificationEvent(contacto);
        return contacto;

    }

    @Override
    public void deleteContacto(String id) {
        logger.info(">>> Iniciando proceso de eliminar un contacto");
        Contacto contacto = getContactoById(id);
        if (contacto == null){
            logger.error("El id del contacto no existe en la base de datos");
            return;
        }
        contactosRepository.deleteContacto(contacto);
        initiateEmailNotificationEvent(contacto);
    }

    @Override
    public List<Contacto> getAllContactos() {
        List<Contacto> contactos = contactosRepository.getAllContactos();
        return contactos;
    }

    private void initiateEmailNotificationEvent(Contacto contacto) {
        AddNewContactEvent addNewContactEvent = emailNotificationEventMapper.mapToSQS(contacto);
        try {
            emailNotificationPublisher.publishContactChangeEvent(addNewContactEvent);
        } catch (JsonProcessingException exception) {
            logger.error("Hubo un error al publicar la notificacion de nuevo contacto a Amazon AQS");
            exception.printStackTrace();
        }
    }
}
