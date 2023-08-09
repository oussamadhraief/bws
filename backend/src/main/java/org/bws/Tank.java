package org.bws;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;
import io.smallrye.mutiny.Multi;
import io.smallrye.mutiny.Uni;
import io.vertx.mutiny.pgclient.PgPool;
import io.vertx.mutiny.sqlclient.Row;
import io.vertx.mutiny.sqlclient.Tuple;

@Entity
public class Tank {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nature")
    private String nature;

    @Column(name = "capacity")
    private float capacity;

    @Column(name = "site")
    private String site;
    

    public Long getId() {
        return id;
    }
    
   public String getNature() {
       return nature;
   }

    public float getCapacity() {
        return capacity;
    }

    public String getSite() {
        return site;
    }

    public void setId(Long id) {
        this.id = id;
    }

   public void setNature(String nature) {
       this.nature = nature;
   }

    public void setCapacity(float capacity) {
        this.capacity = capacity;
    }

    public void setSite(String site) {
        this.site = site;
    }
    
    public Tank(){

    }

    public Tank(String nature, float capacity, String site) {

    }

    public Tank(Long id, String nature, float capacity, String site){
        this.id = id;
        this.nature = nature;
        this.capacity = capacity;
        this.site = site;
    }

    public static Multi<Tank> findAll(PgPool client) {
        return client.query("SELECT id, nature, capacity, site FROM tanks ORDER BY id")
        .execute()
        .onItem().transformToMulti(set -> Multi.createFrom().iterable(set))
        .onItem().transform(row -> new Tank(row.getLong("id"), row.getString("nature"), row.getFloat("capacity"), row.getString("site")));
    }
    
    public static Uni<Tank> findById(PgPool client, Long id) {
        return client.preparedQuery("Select id, nature, capacity, site from tanks where id=$1").execute(Tuple.of(id))
        .onItem().transform(m -> m.iterator().hasNext() ? from(m.iterator().next()) : null);
    }

    public static Uni<Long> save(PgPool client, Long id, String nature, float capacity, String  site){
        return client.preparedQuery("insert into tanks (id, nature, capacity, site) values($1, $2, $3, $4)").execute(Tuple.of(id, nature, capacity, site))
        .map(result -> id);
    }

    public static Uni<Boolean> delete(PgPool client, Long id) {
        return client.preparedQuery("delete from tanks where id=$1").execute(Tuple.of(id))
        .onItem()
        .transform(m -> m.rowCount() == 1);
    }

    public static Tank from(Row row) {
        return new Tank(row.getLong("id"), row.getString("nature"), row.getFloat("capacity"), row.getString("site"));
    }

}
