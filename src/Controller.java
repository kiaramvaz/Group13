import javax.xml.crypto.Data;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.*;
import java.util.regex.Pattern;

public class Controller {
    static Scanner reader = new Scanner(System.in);  // Create a Scanner object
    static ArrayList<User> userList = new ArrayList<User>();

    public static void main(String[] args) {

        //System.out.println("--- ACCOUNT CREATION TEST: ---\n");
        //TESTAccountCreation();

        System.out.println("--- PET CREATION TEST: ---\n");
        TESTPetCreation();

        //TESTDisplayBrowser();
    }

    public static void TESTDisplayBrowser(){
        PetPlantBrowser browser = PetPlantBrowser.getInstance();
        browser.display();

        System.out.println();
    }

    public static void TESTAccountCreation(){

        String username, password, repassword, email;
        Boolean check;

        //Enter Username
        System.out.println("Enter Username: ");
        username = reader.nextLine();
        check = checkUsername(username);
        while(!check){
            System.out.println("Enter Username: ");
            username = reader.nextLine();
            check = checkUsername(username);
        }

        //Enter Email
        System.out.println("Enter Email: ");
        email = reader.nextLine();
        check = checkEmail(email);
        while(!check){
            System.out.println("Enter Email: ");
            email = reader.nextLine();
            check = checkEmail(email);
        }

        //Enter Password
        System.out.println("Enter Password: ");
        password = reader.nextLine();
        check = checkPassword(password);
        while(!check){
            System.out.println("Enter Password: ");
            password = reader.nextLine();
            check = checkPassword(password);
        }

        //Retype Password
        System.out.println("Re-Enter Password: ");
        repassword = reader.nextLine();
        check = checkRetypedPassword(password, repassword);
        while(!check){
            System.out.println("Re-Enter Password: ");
            repassword = reader.nextLine();
            check = checkRetypedPassword(password, repassword);
        }


        User newUser =  new User(username, password, email);
        userList.add(newUser);

        System.out.println("Account creation successful");



    }

    public static boolean checkEmail(String email) {
        // Define a regular expression for a basic email validation
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";

        // Compile the regular expression
        Pattern pattern = Pattern.compile(emailRegex);

        if (email.length() < 8 || email.length() > 50) {
            System.out.println("Try again: Email must be between 8 and 50 characters.");
            return false;
        }
        if (!pattern.matcher(email).matches()) {
            System.out.println("Try again: Invalid email format.");
            return false;
        }
        if (email.contains(" ")) {
            System.out.println("Try again: Email should not contain any spaces.");
            return false;
        }
        for (User user : userList) {
            if (user.getEmail().equals(email)) {
                System.out.println("Try again: Email is already in use");
                return false; // Email is already in use
            }
        }


        return true;
    }


    public static boolean checkUsername(String username){
        String specialCharacters = "[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]+";
        Pattern pattern = Pattern.compile(specialCharacters);

        //check if username exists in an array of usernames.

        if(username.length() < 8 || username.length() > 12){
            System.out.println("Try again: Username must be between 8 and 12 characters.");
            return false;
        }if (pattern.matcher(username).find()){
            System.out.println("Try again: Username must not have special characters");
            return false;
        }
        if(username.contains(" ")) {
            System.out.println("Try again: Username should not contain any spaces");
            return false;
        }

        for (User user : userList) {
            if (user.getUsername().equals(username)) {
                System.out.println("Try again: Username is already in use");
                return false; // Email is already in use
            }
        }

        return true;
    }

    public static boolean checkPassword(String password){
        String specialCharacters = "[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]+";
        Pattern pattern = Pattern.compile(specialCharacters);

        if(password.length() < 8 || password.length() > 12){
            System.out.println("Try again:  Password must be between 8 and 12 characters.");
            return false;
        }

        if (!pattern.matcher(password).find()){
            System.out.println("Try again:  Password must have at least one special character");
            return false;
        }
        if(password.contains(" ")) {
            System.out.println("Try again: Password should not contain any spaces");
            return false;
        }
        if(!password.matches(".*\\d.*")){
            System.out.println("Try Again: Password requires at least one numerical value");
            return false;
        }
        else{
            return true;
        }
    }

    public static boolean checkRetypedPassword(String password, String retyped){
        return password.equals(retyped);

    }

    public static void TESTPetCreation()
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

        /*// Test Valid Pets
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
        user.displayPets(); */

        /* User Input Section */

        // Display possible Pet options
        PetPlantBrowser browser = PetPlantBrowser.getInstance();

        System.out.println("Browser Pet Options: ");
        browser.display();

        System.out.println();

        String petDataChoice;
        String response, petName;
        char petSex;
        LocalDate PetDOB;

        // Add New Pet
        do {
            System.out.println("Enter Pet Choice: ");
            petDataChoice = reader.nextLine();
        } while (database.getPetData(petDataChoice) == null && database.getPetData(Integer.parseInt(petDataChoice) - 1) == null);

        Pet newPet = new Pet(database.getPetData(petDataChoice));
        if (database.getPetData(petDataChoice) == null)
        {
            newPet = new Pet(database.getPetData(Integer.parseInt(petDataChoice) - 1));
        }

        // Enter Additional Info
        do {
            System.out.println("Enter Additional Information? (enter name, sex, or date of birth, end to stop): ");
            response = reader.nextLine();

            if (response.equals("name"))
            {
                do {
                    System.out.println("Enter Pet Name: ");
                    petName = reader.nextLine();
                } while (!newPet.setName(petName));
            }
            else if (response.equals("sex"))
            {
                do {
                    System.out.println("Enter Pet Sex: ");
                    petSex = reader.next().charAt(0);
                } while (!newPet.setSex(petSex));
            }
            else if (response.equals("date of birth"))
            {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

                do {
                    System.out.println("Enter Pet Date of Birth (DD/MM/YYYY): ");

                    try {
                        PetDOB = LocalDate.parse(reader.nextLine(), formatter);
                    } catch (Exception e)
                    {
                        //System.out.println(e);
                        PetDOB = null;
                    }

                } while (!newPet.setDOB(PetDOB));
            }

        } while(!response.equals("end"));

        user.addPet(newPet);

        // Print out all User pets
        System.out.println("\nValid pets in user account: ");
        user.displayPets();

        System.out.println();
    }
}

