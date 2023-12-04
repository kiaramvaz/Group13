import java.time.LocalDate;
import java.util.ArrayList;

public class Plant {

    private String name;
    private String profileImageFilename;
    private PlantData plantData;
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

    public boolean setName(String name) {
        if (name == null)
        {
            System.out.println("Name is null.");
        }
        else if (name.equals("") || name.length() > 32)
        {
            System.out.println("Name length must be between 1 and 32.");
        }
        else
        {
            this.name = name;
            return true;
        }
        return false;
    }

    public String getProfileImageFilename() {
        return profileImageFilename;
    }

    public boolean setProfileImageFilename(String profileImageFilename) {
        this.profileImageFilename = profileImageFilename;
        return true;
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

    public void setCareEvents(ArrayList<Event> careEvents) {
        this.careEvents = careEvents;
    }

    public ArrayList<Event> getCareEvents() {
        return careEvents;
    }
}
