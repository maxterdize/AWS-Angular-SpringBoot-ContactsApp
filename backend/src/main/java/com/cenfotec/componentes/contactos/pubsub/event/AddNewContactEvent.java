package com.cenfotec.componentes.contactos.pubsub.event;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AddNewContactEvent {

    private String contactName;
    private String contactEmail;

}
