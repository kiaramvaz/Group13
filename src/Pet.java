import java.time.LocalDate;
import java.time.chrono.ChronoLocalDate;
import java.util.ArrayList;

public class Pet {

    private String name;
    private LocalDate DOB;
    private String profileImageFilename;
    private PetData petData;
    private char sex;
    private ArrayList<Event> careEvents = new ArrayList<Event>();

    public Pet(PetData petData, String name, LocalDate DOB, String profileImageFileName, char sex) {
        this.name = name;
        this.DOB = DOB;
        this.profileImageFilename = profileImageFileName;
        this.petData = petData;
        this.sex = sex;
    }

    public Pet(PetData petData, String name) {
        this.petData = petData;
        this.name = name;
    }

    public Pet(PetData petData) {
        this.petData = petData;
        name = "New Pet";
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

    public LocalDate getDOB() {
        return DOB;
    }

    public boolean setDOB(LocalDate DOB) {
        if (DOB == null)
        {
            System.out.println("Date of Birth data read error, please use the format: (DD/MM/YYYY)");
        }
        else if (DOB.isAfter(LocalDate.now()))
        {
            System.out.println("Date of Birth is impossible!");
        }
        else if (DOB.isBefore(LocalDate.of(0, 1, 1)))
        {
            System.out.println("Date of Birth is too old!");
        }
        else
        {
            this.DOB = DOB;
            return true;
        }
        return false;
    }

    public String getProfileImageFilename() {
        return profileImageFilename;
    }

    public void setProfileImageFilename(String profileImageFilename) {
        this.profileImageFilename = profileImageFilename;
    }

    public PetData getPetData() {
        return petData;
    }

    public void setPetData(PetData petData) {
        this.petData = petData;
    }

    public char getSex() {
        return sex;
    }

    public boolean setSex(char sex) {
        // Unnecessary because char can't be null, Character can
        /*if (DOB == null)
        {
            System.out.println("Sex is null.");
        }
        else */if (sex == 'M' || sex == 'm')
        {
            this.sex = 'M';
        }
        else if (sex == 'F' || sex == 'f')
        {
            this.sex = 'F';
        }
        else
        {
            System.out.println("Invalid Sex: " + sex);
            return false;
        }
        return true;
    }

    public void addEvent(Event newEvent) {
        careEvents.add(newEvent);
    }

    public void removeEvent(Event remEvent) {
        careEvents.remove(remEvent);
    }
}
