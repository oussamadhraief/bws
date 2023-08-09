package org.bws;

import io.smallrye.mutiny.Multi;
import io.smallrye.mutiny.Uni;
import io.vertx.mutiny.pgclient.PgPool;
import io.vertx.mutiny.sqlclient.Row;
import io.vertx.mutiny.sqlclient.Tuple;
import jakarta.persistence.Column;
import jakarta.persistence.Id;

public class Pump {
    
    @Id
    private Long id;

    @Column(name= "quantity")
    private Integer quantity;

    @Column(name= "tankid")
    private Long tankid;

    private String nature;


    public Long getId() {
        return id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public Long getTankId() {
        return tankid;
    }

    public String getNature() {
        return nature;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public void setTankId(Long tankid) {
        this.tankid = tankid;
    }

    public void setNature(String nature) {
        this.nature = nature;
    }
    

    public Pump(){

    }

    public Pump(Integer quantity, Long tankid) {

    }

    public Pump(Long id, Integer quantity, Long tankid) {
        this.id = id;
        this.quantity = quantity;
        this.tankid = tankid;
    }

    public Pump(Long id, Integer quantity, Long tankid, String nature) {
        this.id = id;
        this.quantity = quantity;
        this.tankid = tankid;
        this.nature = nature;
    }

    public static Multi<Pump> findAll(PgPool client) {
        return client.query("SELECT p.id, p.quantity, p.tankid, t.nature FROM pumps p JOIN tanks t ON p.tankid = t.id ORDER BY p.id")
                .execute()
                .onItem().transformToMulti(set -> Multi.createFrom().iterable(set))
                .onItem().transform(row -> new Pump(
                        row.getLong("id"),
                        row.getInteger("quantity"),
                        row.getLong("tankid"),
                        row.getString("nature")
                ));
    }

    public static Uni<Pump> findById(PgPool client, Long id){
        return client.preparedQuery("SELECT p.id, p.quantity, p.tankid, t.nature FROM pumps p JOIN tanks t ON p.tankid=t.id where p.id=$1")
                .execute(Tuple.of(id))
                .onItem()
                .transform(m -> m.iterator().hasNext() ? from(m.iterator().next()) : null);
    }

    public static Uni<Long> save(PgPool client, Long id, Integer quantity, Long tankid){
        return client.preparedQuery("insert into pumps(id, quantity, tankid) values($1,$2, $3)")
                    .execute(Tuple.of(id, quantity, tankid))
                    .map(result -> id);
    }

    public static Uni<Boolean> delete(PgPool client, Long id){
        return client.preparedQuery("delete from pumps where id=$1").execute(Tuple.of(id))
                    .onItem()
                    .transform(m -> m.rowCount() == 1);
    }

    public static Pump from(Row row) {
        return new Pump(
            row.getLong("id"),
                        row.getInteger("quantity"),
                        row.getLong("tankid"),
                        row.getString("nature")
                );
    }

}
