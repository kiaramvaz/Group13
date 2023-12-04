import java.time.LocalDate;
import java.time.LocalTime;
public class Event {

    String eventName;
    String subjectName;
    LocalTime time;
    LocalDate date;
    String frequency;
    boolean completed;

    public Event(String eventName, String subjectName, LocalTime time, LocalDate date, String frequency) {
        this.eventName = eventName;
        this.subjectName = subjectName;
        this.time = time;
        this.date = date;
        this.frequency = frequency;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public LocalTime getTime() {
        return time;
    }

    public boolean setTime(LocalTime time) {
        if (time == null)
        {
            System.out.println("Please use the format: (HH-mm-ss)");
        }
        else
        {
            this.time = time;
            return true;
        }
        return false;
    }

    public LocalDate getDate() {
        return date;
    }

    public boolean setDate(LocalDate date) {
        if (date == null)
        {
            System.out.println("Please use the format: (DD/MM/YYYY)");
        }
        else if (date.isBefore(LocalDate.of(0, 1, 1)))
        {
            System.out.println("Too old!");
        }
        else
        {
            this.date = date;
            return true;
        }
        return false;
    }

    public String getFrequency() {
        return frequency;
    }

    public boolean setFrequency(String frequency) {
        if(frequency.equals("None"))
        {
            this.frequency = "None";
        }
        else if(frequency.equals("Daily"))
        {
            this.frequency = "Daily";
        }
        else if(frequency.equals("Weekly"))
        {
            this.frequency = "Weekly";
        }
        else
        {
            return false;
        }
        return true;
    }

    public void complete() {
        boolean completed = true;
    }

    public void undoCompletion() {
        boolean completed = false;
    }

    public boolean getCompletionStatus() {
        return completed;
    }
}
