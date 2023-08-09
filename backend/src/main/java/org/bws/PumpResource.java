package org.bws;

import java.net.URI;

import io.smallrye.mutiny.Multi;
import io.smallrye.mutiny.Uni;
import io.vertx.mutiny.pgclient.PgPool;
import jakarta.annotation.PostConstruct;
import jakarta.inject.Inject;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.core.Response;

@Path("/api/pumps")
public class PumpResource {

    @Inject
    PgPool client;

    @PostConstruct
    void config(){
        
    }

    @GET
    public Multi<Pump> get() {
        return Pump.findAll(client);
    }

    @GET
    @Path("{id}")
    public Uni<Response> get(@PathParam("id") Long id){
        return Pump.findById(client, id)
                    .onItem().transform(pump -> pump != null ? Response.ok(pump) : Response.status(Response.Status.NOT_FOUND))
                    .onItem()
                    .transform(Response.ResponseBuilder::build);
    }

    @POST
    public Uni<Response> create(Pump pump){
        return Pump.save(client, pump.getId(), pump.getQuantity(), pump.getTankId())
                    .onItem()
                    .transform(id -> URI.create("/tanks/" + id))
                    .onItem()
                    .transform(uri -> Response.created(uri).build());
    }

    @DELETE
    @Path("{id}")
    public Uni<Response> delete(@PathParam("id") Long id){
        return Pump.delete(client, id)
                .onItem()
                .transform(deleted -> deleted ? Response.Status.NO_CONTENT : Response.Status.NOT_FOUND)
                .onItem()
                .transform(status -> Response.status(status).build());
    }
}
