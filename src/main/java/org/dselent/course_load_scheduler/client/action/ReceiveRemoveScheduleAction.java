package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.Schedule;

public class ReceiveRemoveScheduleAction extends Action{
	private Schedule schedule;
	
	public ReceiveRemoveScheduleAction(Schedule schedule) {
		this.schedule = schedule;
	}
	
	public Schedule getRemoveScheduleInfo() {
		return schedule;
	}

	public void setSchedule(Schedule schedule) {
		this.schedule = schedule;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(schedule);

		return sb.toString();
	}
}
