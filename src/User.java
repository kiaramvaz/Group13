import java.util.ArrayList;

public class User {

    private String username;
    private String password;
    private String email;
    private String phoneNumber;

    private ArrayList<Pet> pets = new ArrayList<Pet>();
    private ArrayList<Plant> plants = new ArrayList<Plant>();

    public User(String username, String password, String email, String phoneNumber) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public User(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public void displayPets()
    {
        for (int i = 0; i < pets.size(); i++)
        {
            Pet current = pets.get(i);
            System.out.println("Pet " + (i + 1) + ": " + current.getName() + ", Born " + current.getDOB() + ". " + current.getPetData().getBreed() + ", " + current.getPetData().getSpecies());
        }
    }

    public void addPet(Pet newPet) {
        pets.add(newPet);
    }

    public void removePet(Pet remPet) {
        // Add: Are you sure? confirmation text
        pets.remove(remPet);
    }

    public void addPlant(Plant newPlant) {
        plants.add(newPlant);
    }

    public void removePlant(Plant remPlant) {
        // Add: Are you sure? confirmation text
        plants.remove(remPlant);
    }
}
