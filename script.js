public class Bot {
    private String name;
    private int health;
    private int strength;
    private int gatheringSpeed;
    private int buildingSpeed;
    private int defensePower;

    public Bot(String name) {
        this.name = name;
        this.health = 100;
        this.strength = 10;
        this.gatheringSpeed = 5; // resources per second
        this.buildingSpeed = 3; // buildings per second
        this.defensePower = 8;
    }

    public void gatherResources(Village village) {
        int gathered = gatheringSpeed;
        village.addResources(gathered);
        System.out.println(name + " gathered " + gathered + " resources.");
    }

    public void buildDefense(Village village) {
        if (village.getResources() > 20) {
            village.decreaseResources(20);
            System.out.println(name + " built defenses.");
        }
    }

    public void defend(Village village) {
        System.out.println(name + " is defending the village with strength " + defensePower);
    }

    public void performAction(Village village) {
        Random rand = new Random();
        int action = rand.nextInt(3);

        // Decide what the bot will do based on priority
        if (action == 0) {
            gatherResources(village);
        } else if (action == 1) {
            buildDefense(village);
        } else {
            defend(village);
        }
    }
}
