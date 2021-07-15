package com.cenfotec.componentes.contactos.mapper;

import com.cenfotec.componentes.contactos.entity.Contacto;
import com.cenfotec.componentes.contactos.pubsub.event.AddNewContactEvent;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SQSEmailNotificationEventMapper {

    @Mapping(source = "firstName", target = "contactName")
    @Mapping(source = "email", target = "contactEmail")
    AddNewContactEvent mapToSQS(Contacto contacto);
}
