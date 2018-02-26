package org.dselent.course_load_scheduler.client.action;

import java.util.ArrayList;

import org.dselent.course_load_scheduler.client.model.EndTime;
import org.dselent.course_load_scheduler.client.model.User;

public class ReceiveEndTimesAction extends Action {
	private User model;
	private ArrayList<EndTime> endTimes;

	public ReceiveEndTimesAction(ArrayList<EndTime> endTimes)
	{
		this.endTimes = endTimes;
	}

	public ArrayList<EndTime> getEndTimes() {
		return endTimes;
	}

	@Override
	public String toString()
	{
		StringBuilder builder = new StringBuilder();
		builder.append("ReceiveStartTimesAction [endTimes=");
		builder.append(endTimes);
		builder.append("]");
		return builder.toString();
	}

}
