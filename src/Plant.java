import java.time.LocalDate;
import java.util.ArrayList;

public class Plant {

    String name;
    String profileImageFilename;
    PlantData plantData;
    private ArrayList<Event> careEvents = new ArrayList<Event>();

    public Plant(PlantData plantData, String name, String profileImageFilename) {
        this.name = name;
        this.profileImageFilename = profileImageFilename;
        this.plantData = plantData;
    }

    public Plant(PlantData plantData, String name) {
        this.name = name;
        this.plantData = plantData;
    }

    public Plant(PlantData plantData) {
        this.plantData = plantData;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProfileImageFilename() {
        return profileImageFilename;
    }

    public void setProfileImageFilename(String profileImageFilename) {
        this.profileImageFilename = profileImageFilename;
    }

    public PlantData getPlantData() {
        return plantData;
    }

    public void setPlantData(PlantData plantData) {
        this.plantData = plantData;
    }

    public void addEvent(Event newEvent) {
        careEvents.add(newEvent);
    }

    public void removeEvent(Event remEvent) {
        careEvents.remove(remEvent);
    }
}
