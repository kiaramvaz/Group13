import java.time.LocalDate;
import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;

public class TodoList {

    public void displayTodaysEvents (User user)
    {
        System.out.println("Today's Date and Time: " + LocalDate.now() + ", " + LocalDateTime.now());

        ArrayList<Event> todaysEvents = getTodaysEvents(user);
        for (int i = 0; todaysEvents.size() > i; i++)
        {
            Event currentEvent = todaysEvents.get(i);
            System.out.println("Event " + i + ": Date " + currentEvent.getDate() + ", Time " + currentEvent.getTime() + ", Frequency " + currentEvent.getFrequency());
            System.out.println("This event is for " + currentEvent.getSubjectName() + ", Event named " + currentEvent.getSubjectName());
        }
    }

    public ArrayList<Event> getTodaysEvents (User user)
    {
        ArrayList<Event> todaysEvents = new ArrayList<>();

        for (int i = 0; user.getPets().size() > i; i++)
        {
            Pet currentPet = user.getPets().get(i);

            for (int j = 0; currentPet.getCareEvents().size() > i; j++)
            {
                Event currentEvent = currentPet.getCareEvents().get(j);

                if (currentEvent.getDate().equals(LocalDate.now())) {
                    todaysEvents.add(currentEvent);
                }
                else if (currentEvent.getFrequency().equals("Daily"))
                {
                    todaysEvents.add(currentEvent);
                }
                else if (currentEvent.getDate().getDayOfWeek() == LocalDate.now().getDayOfWeek() && currentEvent.getFrequency().equals("Weekly"))
                {
                    todaysEvents.add(currentEvent);
                }
            }
        }

        for (int i = 0; user.getPlants().size() > i; i++)
        {
            Plant currentPlant = user.getPlants().get(i);

            for (int j = 0; currentPlant.getCareEvents().size() > j; j++)
            {
                Event currentEvent = currentPlant.getCareEvents().get(j);

                if (currentEvent.getDate().equals(LocalDate.now())) {
                    todaysEvents.add(currentEvent);
                }
                else if (currentEvent.getFrequency().equals("Daily"))
                {
                    todaysEvents.add(currentEvent);
                }
                else if (currentEvent.getDate().getDayOfWeek() == LocalDate.now().getDayOfWeek() && currentEvent.frequency.equals("Weekly"))
                {
                    todaysEvents.add(currentEvent);
                }
            }
        }

        return todaysEvents;
    }

    public ArrayList<Event> getAllEvents (User user)
    {
        ArrayList<Event> allEvents = new ArrayList<>();

        for (int i = 0; user.getPets().size() > i; i++)
        {
            Pet current = user.getPets().get(i);
            for (int j = 0; current.getCareEvents().size() > i; j++)
            {
                allEvents.add(user.getPets().get(i).getCareEvents().get(j));
            }
        }

        for (int i = 0; user.getPlants().size() > i; i++)
        {
            Plant current = user.getPlants().get(i);
            for (int j = 0; current.getCareEvents().get(j) != null; j++)
            {
                allEvents.add(user.getPlants().get(i).getCareEvents().get(j));
            }
        }

        return allEvents;
    }
}
