import java.util.Scanner;
public class PetPlantBrowser {

    // Singleton behavior, allows only a single instance of the class
    private static PetPlantBrowser instance;
    private PetPlantBrowser() {
        // nothing
    }
    static {
        instance = new PetPlantBrowser();
    }
    /** Static 'instance' method */
    public static PetPlantBrowser getInstance() {
        return instance;
    }

    DatabaseManager database = DatabaseManager.getInstance();

    public void display()
    {
        Scanner scanner = new Scanner(System.in);
        String input = "";

        while (!input.equals("end"))
        {
            System.out.println("Pets:");

            for (int i = 0; database.getPetData(i) != null; i++)
            {
                PetData current = database.getPetData(i);
                System.out.println("Pet " + (i + 1) + ": " + current.getSpecies() + ", " + current.getBreed());
            }

            System.out.println("Plants:");

            for (int i = 0; database.getPlantData(i) != null; i++)
            {
                PlantData current = database.getPlantData(i);
                System.out.println("Pet " + (i + 1) + ": " + current.getSpecies() + ", " + current.getType());
            }

            System.out.println("Type 'end' to exit: ");

            input = scanner.nextLine();
        }
    }
}
