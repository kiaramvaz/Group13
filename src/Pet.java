import java.time.LocalDate;
import java.util.ArrayList;

public class Pet {

    String name;
    LocalDate DOB;
    String profileImageFilename;
    PetData petData;
    char sex;
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

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDOB() {
        return DOB;
    }

    public void setDOB(LocalDate DOB) {
        this.DOB = DOB;
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

    public void setSex(char sex) {
        this.sex = sex;
    }

    public void addEvent(Event newEvent) {
        careEvents.add(newEvent);
    }

    public void removeEvent(Event remEvent) {
        careEvents.remove(remEvent);
    }
}
