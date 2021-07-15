package com.cenfotec.componentes.contactos.pubsub.publisher;

import com.cenfotec.componentes.contactos.pubsub.event.AddNewContactEvent;
import com.fasterxml.jackson.core.JsonProcessingException;

public interface EmailNotificationPublisher {

    public void publishContactChangeEvent(AddNewContactEvent event) throws JsonProcessingException;
}
