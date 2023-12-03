import javax.xml.crypto.Data;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.*;
import java.util.regex.Pattern;

public class Controller {
    static Scanner reader = new Scanner(System.in);  // Create a Scanner object
    static ArrayList<User> userList = new ArrayList<User>();

    public static void main(String[] args) {

        System.out.println("--- ACCOUNT CREATION TEST: ---\n");
        TESTAccountCreation();

        System.out.println("--- PET CREATION TEST: ---\n");
        TESTPetCreation(userList.get(0));

        System.out.println("--- PLANT CREATION TEST: ---\n");
        TESTPlantCreation(userList.get(0));

        System.out.println("--- TODO LIST TEST: ---\n");
        new TodoList().displayTodaysEvents(userList.get(0));
    }

    /*public static void TESTDisplayBrowser() {
        PetPlantBrowser browser = PetPlantBrowser.getInstance();
        browser.display();

        System.out.println();
    }*/

    public static ArrayList<Event> userReviewDefaultEvents (ArrayList<Event> eventList, String subjectName) {
        ArrayList<Event> returnEvents = new ArrayList<>();

        for (int i = 0; i < eventList.size(); i++)
        {
            Event currentEvent = eventList.get(i);
            currentEvent.setSubjectName(subjectName);

            String response;

            do {
                System.out.println("Event " + i + ": " + currentEvent.getEventName() + ", for " + currentEvent.getSubjectName());
                System.out.println("Date " + currentEvent.getDate() + ", Time " + currentEvent.getTime() + ", Frequency " + currentEvent.getFrequency());

                System.out.println("edit, skip, or save the current event? ");
                response = reader.nextLine();

                if (response.equals("edit"))
                {
                    String editResponse;

                    do {
                        System.out.println("What to edit? event name, subject name, date, time, frequency, or back?");
                        editResponse = reader.nextLine();

                        String attributeResponse;

                        if(editResponse.equals("event name"))
                        {
                            System.out.println("Enter event name: ");
                            attributeResponse = reader.nextLine();
                            currentEvent.setEventName(attributeResponse);
                        }
                        else if(editResponse.equals("subject name"))
                        {
                            System.out.println("Enter subject name: ");
                            attributeResponse = reader.nextLine();
                            currentEvent.setSubjectName(attributeResponse);
                        }
                        else if(editResponse.equals("date"))
                        {
                            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
                            LocalDate eventDate;

                            do {
                                System.out.println("Enter event date (DD/MM/YYYY): ");
                                try {
                                    eventDate = LocalDate.parse(reader.nextLine(), formatter);
                                } catch (Exception e)
                                {
                                    //System.out.println(e);
                                    eventDate = null;
                                }
                            } while (!currentEvent.setDate(eventDate));
                        }
                        else if(editResponse.equals("time"))
                        {
                            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH-mm-ss");
                            LocalTime eventTime;

                            do {
                                System.out.println("Enter event time (HH-mm-ss): ");
                                try {
                                    eventTime = LocalTime.parse(reader.nextLine(), formatter);
                                } catch (Exception e)
                                {
                                    //System.out.println(e);
                                    eventTime = null;
                                }
                            } while (!currentEvent.setTime(eventTime));
                        }
                        else if(editResponse.equals("frequency"))
                        {
                            do {
                                System.out.println("Enter event frequency (None, Daily, Weekly): ");
                                attributeResponse = reader.nextLine();
                            } while (!currentEvent.setFrequency(attributeResponse));
                        }

                    } while (!editResponse.equals("back"));
                }
                else if (response.equals("save"))
                {
                    returnEvents.add(currentEvent);
                    break;
                }

            } while (!response.equals("skip"));
        }

        return returnEvents;
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

    public static void TESTPetCreation(User user)
    {
        DatabaseManager database = DatabaseManager.getInstance();

        // Test Pet Data
        PetData LabradorRetriever = new PetData("LabRetriever.jpg", "Dog", "Labrador Retriever", null, 12, new ArrayList<Event>());
        PetData GermanShepherd = new PetData("GermanShepherd.jpg", "Dog", "German Shepherd", null, 11, new ArrayList<Event>());
        PetData RedeyedTreeFrog = new PetData("Red-eyedTreeFrog.jpg", "Frog", "Red-eyed Tree Frog", null, 5, new ArrayList<Event>());

        // Adding Test Pet Data to Database
        database.addPetData(LabradorRetriever);
        database.addPetData(GermanShepherd);
        database.addPetData(RedeyedTreeFrog);

        // Display possible Pet options
        PetPlantBrowser browser = PetPlantBrowser.getInstance();

        //System.out.println("Browser Pet Options: ");
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

        newPet.setCareEvents(userReviewDefaultEvents(newPet.getPetData().getDefaultCareEvents(), newPet.getName()));

        user.addPet(newPet);

        // Print out all User pets
        System.out.println("\nValid pets in user account: ");
        user.displayPets();

        System.out.println();
    }

    public static void TESTPlantCreation(User user)
    {
        DatabaseManager database = DatabaseManager.getInstance();

        ArrayList<Event> bambooEventList = new ArrayList<>();
        bambooEventList.add(new Event("Water Bamboo", "Giant Bamboo", LocalTime.of(6, 0, 0), LocalDate.now(), "Daily"));

        // Test Pet Data
        PlantData GiantBamboo = new PlantData("GiantBamboo.jpg", "Giant Bamboo", "Dendrocalamus Giganteus", "Bamboo", null, "High", bambooEventList);
        PlantData PineBonsaiTree = new PlantData("PineBonsaiTree.jpg", "Pine Bonsai Tree", "Pinus thunbergii", "Bonsai Tree", null, "High", new ArrayList<Event>());
        PlantData PeaceLily = new PlantData("PeaceLily.jpg", "Peace Lily", "Spathiphyllum", "House Plant", null, "Low", new ArrayList<Event>());

        // Adding Test Pet Data to Database
        database.addPlantData(GiantBamboo);
        database.addPlantData(PineBonsaiTree);
        database.addPlantData(PeaceLily);

        // Display possible Pet options
        PetPlantBrowser browser = PetPlantBrowser.getInstance();

        System.out.println("Browser Plant Options: " + database.getPlantData(0));
        browser.display();

        System.out.println();

        String plantDataChoice;
        String response, plantName, plantProfileImage;

        // Add New Plant
        do {
            System.out.println("Enter Plant Choice: ");
            plantDataChoice = reader.nextLine();
        } while (database.getPlantData(plantDataChoice) == null && database.getPlantData(Integer.parseInt(plantDataChoice) - 1) == null);

        Plant newPlant = new Plant(database.getPlantData(plantDataChoice));
        if (database.getPlantData(plantDataChoice) == null)
        {
            newPlant = new Plant(database.getPlantData(Integer.parseInt(plantDataChoice) - 1));
        }

        // Enter Additional Info
        do {
            System.out.println("Enter Additional Information? (enter name, pfp, or end to stop): ");
            response = reader.nextLine();

            if (response.equals("name"))
            {
                do {
                    System.out.println("Enter Plant Name: ");
                    plantName = reader.nextLine();
                } while (!newPlant.setName(plantName));
            }
            else if (response.equals("pfp"))
            {
                do {
                    System.out.println("Enter Plant Profile Picture: ");
                    plantProfileImage = reader.nextLine();
                } while (!newPlant.setProfileImageFilename(plantProfileImage));
            }

        } while(!response.equals("end"));

        newPlant.setCareEvents(userReviewDefaultEvents(newPlant.getPlantData().getDefaultCareEvents(), newPlant.getName()));

        user.addPlant(newPlant);

        // Print out all User plants
        System.out.println("\nValid plants in user account: ");
        user.displayPlants();

        System.out.println();
    }
}

