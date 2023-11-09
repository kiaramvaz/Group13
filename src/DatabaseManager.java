import java.util.ArrayList;

public class DatabaseManager {

    // Singleton behavior, allows only a single instance of the class
    private static DatabaseManager instance;
    private DatabaseManager() {
        // nothing
    }
    static {
        instance = new DatabaseManager();
    }
    /** Static 'instance' method */
    public static DatabaseManager getInstance() {
        return instance;
    }

    private ArrayList<PetData> petDataArray = new ArrayList<PetData>();
    private ArrayList<PlantData> plantDataArray = new ArrayList<PlantData>();

    public void addPetData(PetData newPetData) {
        petDataArray.add(newPetData);
    }

    public PetData getPetData(int index)
    {
        return petDataArray.get(index);
    }

    public void removePetData(PetData remPetData) {
        // Add: Are you sure? confirmation text
        petDataArray.remove(remPetData);
    }

    public void addPlantData(PlantData newPlantData) {
        plantDataArray.add(newPlantData);
    }

    public PlantData getPlantData(int index)
    {
        return plantDataArray.get(index);
    }

    public void removePlantData(PlantData remPlantData) {
        // Add: Are you sure? confirmation text
        plantDataArray.remove(remPlantData);
    }
}
