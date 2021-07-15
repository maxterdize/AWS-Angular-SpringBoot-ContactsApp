package com.cenfotec.componentes.contactos.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBSaveExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.dynamodbv2.model.*;
import com.cenfotec.componentes.contactos.entity.Contacto;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Repository
public class ContactosRepository {

    Logger logger = LoggerFactory.getLogger(this.getClass());

    private final DynamoDBMapper dynamoDBMapper;

    public void save(Contacto contacto) {
        logger.info(">>> Salvando contacto en DynamoDB");
        dynamoDBMapper.save(contacto);
    }
    public void update(Contacto contacto) {
        logger.info(">>> Modificando contacto en DynamoDB");
        try{
            dynamoDBMapper.save(contacto, buildDynamoDBSaveExpression(contacto));
        } catch (ConditionalCheckFailedException exception){
            logger.error("valor inválido " + exception.getMessage());
        }
    }
    public Contacto getContacto(String id){
        logger.info(">>> obteniendo un contacto de DynamoDB");
        return dynamoDBMapper.load(Contacto.class, id);
    }
    public List<Contacto> getAllContactos() {
        DynamoDBScanExpression dynamoDBScanExpression = new DynamoDBScanExpression();
        List<Contacto> contactos = dynamoDBMapper.scan(Contacto.class, dynamoDBScanExpression);
        return contactos;
    }
    public void deleteContacto(Contacto contacto) {
        logger.info(">>> eliminando un contacto de DynamoDB");
        dynamoDBMapper.delete(contacto);
    }
    public DynamoDBSaveExpression buildDynamoDBSaveExpression(Contacto contacto){
        DynamoDBSaveExpression saveExpression = new DynamoDBSaveExpression();
        Map<String, ExpectedAttributeValue> expected = new HashMap<>();
        expected.put("id", new ExpectedAttributeValue(new AttributeValue(contacto.getId()))
                .withComparisonOperator(ComparisonOperator.EQ));
        saveExpression.setExpected(expected);
        return saveExpression;
    }
}
