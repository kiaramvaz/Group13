import java.util.ArrayList;
public class PlantData {

    private String defaultImageFilename;
    private String species;
    private String type;
    private String bloomSeason;
    private String lightReq;
    private ArrayList<Event> defaultCareEvents = new ArrayList<Event>();

    public PlantData(String defaultImageFilename, String species, String type, String bloomSeason, String lightReq, ArrayList<Event> defaultCareEvents) {
        this.defaultImageFilename = defaultImageFilename;
        this.species = species;
        this.type = type;
        this.bloomSeason = bloomSeason;
        this.lightReq = lightReq;
        this.defaultCareEvents = defaultCareEvents;
    }

    public String getDefaultImageFilename() {
        return defaultImageFilename;
    }
    public String getSpecies() {
        return species;
    }

    public String getType() {
        return type;
    }

    public String getBloomSeason() {
        return bloomSeason;
    }

    public String getLightReq() {
        return lightReq;
    }

    public ArrayList<Event> getDefaultCareEvents() {
        return defaultCareEvents;
    }
}
