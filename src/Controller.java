import javax.xml.crypto.Data;
import java.time.LocalDate;
import java.util.ArrayList;

public class Controller {
    public static void main(String[] args) {

        /* --- Testing: Adding new Pet --- */

        User user = new User("Gerp123", "qwerty123", "gerp123@gmail.com");
        DatabaseManager database = DatabaseManager.getInstance();

        // Test Pet Data
        PetData LabradorRetriever = new PetData("LabRetriever.jpg", "Dog", "Labrador Retriever", null, 12, new ArrayList<Event>());
        PetData GermanShepherd = new PetData("GermanShepherd.jpg", "Dog", "German Shepherd", null, 11, new ArrayList<Event>());
        PetData RedeyedTreeFrog = new PetData("Red-eyedTreeFrog.jpg", "Frog", "Red-eyed Tree Frog", null, 5, new ArrayList<Event>());

        // Adding Test Pet Data to Database
        database.addPetData(LabradorRetriever);
        database.addPetData(GermanShepherd);
        database.addPetData(RedeyedTreeFrog);

        // Test Pets
        Pet Abby    = new Pet(LabradorRetriever, "Abby");
        Pet Bernard = new Pet(GermanShepherd, "Bernard", LocalDate.of(2006, 11, 13), "Berny.jpg", 'M');
        Pet Charlie = new Pet(RedeyedTreeFrog, "Chrissy", LocalDate.of(2021, 04, 23), "IMG1523.jpg", 'F');

        // Adding Test Pets to User Profile
        user.addPet(Abby);
        user.addPet(Bernard);
        user.addPet(Charlie);

        // Print out all User pets
        user.displayPets();

    }
}
