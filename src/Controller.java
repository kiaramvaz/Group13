import javax.xml.crypto.Data;
import java.time.LocalDate;
import java.util.ArrayList;

public class Controller {
    public static void main(String[] args) {

        new TESTPetCreation();
        new TESTDisplayBrowser();

    }
}

class TESTDisplayBrowser
{
    public TESTDisplayBrowser()
    {
        PetPlantBrowser browser = PetPlantBrowser.getInstance();
        browser.display();

        System.out.println();
    }
}

/* --- Testing: Adding new Pet --- */
class TESTPetCreation
{
    public TESTPetCreation()
    {
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

        // Test Valid Pets
        Pet Abby    = new Pet(database.getPetData(0), "Abby");
            System.out.println("Database check: " + database.getPetData(0));
        Pet Bernard = new Pet(database.getPetData(1), "Bernard", LocalDate.of(2006, 11, 13), "Berny.jpg", 'M');
        Pet Charlie = new Pet(database.getPetData(2), "Chrissy", LocalDate.of(2021, 04, 23), "IMG1523.jpg", 'F');

        // Test Invalid Pets
        System.out.println("Invalid Name Errors: ");
        Pet invalidName = new Pet(LabradorRetriever);
            invalidName.setName(null);
            invalidName.setName("");
            invalidName.setName("ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567");
        System.out.println("\nInvalid Sex Errors: ");
        Pet invalidSex = new Pet(GermanShepherd);
            invalidSex.setSex('?');
        System.out.println("\nInvalid Date of Birth Errors: ");
        Pet invalidDOB = new Pet(RedeyedTreeFrog);
            invalidDOB.setDOB(null);
            invalidDOB.setDOB(LocalDate.of(2222, 1, 1));
            invalidDOB.setDOB(LocalDate.of(-1, 1, 1));

        // Adding Valid Test Pets to User Profile
        user.addPet(Abby);
        user.addPet(Bernard);
        user.addPet(Charlie);

        // Print out all User pets
        System.out.println("\nValid pets in user account: ");
        user.displayPets();

        System.out.println();
    }
}
