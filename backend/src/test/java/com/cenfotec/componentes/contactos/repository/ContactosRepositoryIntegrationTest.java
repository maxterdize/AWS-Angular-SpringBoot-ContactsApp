package com.cenfotec.componentes.contactos.repository;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
import com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput;
import com.cenfotec.componentes.contactos.ContactosApplication;
import com.cenfotec.componentes.contactos.entity.Contacto;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.List;

import static org.junit.Assert.assertTrue;

@SpringBootTest
public class ContactosRepositoryIntegrationTest {

//    @Autowired
//    private DynamoDBMapper dynamoDBMapper;
//
//    @Autowired
//    ContactosRepository contactosRepository;

    @Before
    public void setup() throws Exception {

    }

//    @Test
//    public void givenItemWithExpectedCost_whenRunFindAll_thenItemIsFound() {
//        Contacto productInfo = new Contacto();
//        contactosRepository.save(productInfo);
//        List<Contacto> result = (List<Contacto>) contactosRepository.findAll();
//
//        assertTrue(result.size() > 0);
//        assertThat(result.get(0).getCost(), is(equalTo(EXPECTED_COST)));
//    }
}