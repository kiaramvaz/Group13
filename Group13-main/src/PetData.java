import java.util.ArrayList;
public class PetData {

    private String defaultImageFilename;
    private String species;
    private String breed;
    private ArrayList<String> diet = new ArrayList<String>();
    private int avgLifespan;
    private ArrayList<Event> defaultCareEvents = new ArrayList<Event>();

    public PetData(String defaultImageFilename, String species, String breed, ArrayList<String> diet, int avgLifespan, ArrayList<Event> defaultCareEvents) {
        this.defaultImageFilename = defaultImageFilename;
        this.species = species;
        this.breed = breed;
        this.diet = diet;
        this.avgLifespan = avgLifespan;
        this.defaultCareEvents = defaultCareEvents;
    }

    public String getDefaultImageFilename() {
        return defaultImageFilename;
    }

    public String getSpecies() {
        return species;
    }

    public String getBreed() {
        return breed;
    }

    public ArrayList<String> getDiet() {
        return diet;
    }

    public int getAvgLifespan() {
        return avgLifespan;
    }

    public ArrayList<Event> getDefaultCareEvents() {
        return defaultCareEvents;
    }
}
