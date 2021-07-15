package com.cenfotec.componentes.contactos.pubsub.publisher;

import com.cenfotec.componentes.contactos.pubsub.event.AddNewContactEvent;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.aws.messaging.core.QueueMessagingTemplate;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class EmailNotificationPublisherImpl implements EmailNotificationPublisher{

    Logger logger = LoggerFactory.getLogger(this.getClass());

    private final QueueMessagingTemplate queueMessagingTemplate;

    @Value("${amazon.sqs.url}")
    private String sqsEndpoint;

    private ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void publishContactChangeEvent(AddNewContactEvent addNewContactEvent) throws JsonProcessingException {
        logger.info("Publishing email notification event to SQS");
        queueMessagingTemplate.send(sqsEndpoint,
                MessageBuilder.withPayload(objectMapper.writeValueAsString(addNewContactEvent)).build());
    }
}
