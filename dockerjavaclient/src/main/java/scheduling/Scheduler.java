package scheduling;

import java.util.Timer;
import java.util.TimerTask;

public class Scheduler extends TimerTask {
	Timer timer;
	int count = 0;

	public Scheduler() {
	}

	public Scheduler(Timer timer) {
		this.timer = timer;
	}

	public void toDo() {
		System.out.println(" Count-> " + (count++) + " : Hello World ! This is java scheduler ");
	}

	@Override
	public void run() {
		toDo();
		if (count > Integer.MAX_VALUE) {
			// this is the condition when you want to stop the // task.
			timer.cancel();
		}
	}
}