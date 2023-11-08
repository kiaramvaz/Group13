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

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getFrequency() {
        return frequency;
    }

    public void setFrequency(String frequency) {
        this.frequency = frequency;
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
