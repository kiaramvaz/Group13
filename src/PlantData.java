import java.util.ArrayList;
public class PlantData {

    private String defaultImageFilename;
    private String nickname;
    private String species;
    private String type;
    private String lightReq;
    private ArrayList<Event> defaultCareEvents = new ArrayList<Event>();

    public PlantData(String defaultImageFilename, String nickname, String species, String type, String bloomSeason, String lightReq, ArrayList<Event> defaultCareEvents) {
        this.defaultImageFilename = defaultImageFilename;
        this.nickname = nickname;
        this.species = species;
        this.type = type;
        this.lightReq = lightReq;
        this.defaultCareEvents = defaultCareEvents;
    }

    public String getDefaultImageFilename() {
        return defaultImageFilename;
    }
    public String getNickname()
    {
        return nickname;
    }
    public String getSpecies() {
        return species;
    }

    public String getType() {
        return type;
    }

    public String getLightReq() {
        return lightReq;
    }

    public ArrayList<Event> getDefaultCareEvents() {
        return defaultCareEvents;
    }
}
