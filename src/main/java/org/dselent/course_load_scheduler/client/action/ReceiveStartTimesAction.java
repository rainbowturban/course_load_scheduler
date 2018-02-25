package org.dselent.course_load_scheduler.client.action;

import java.util.ArrayList;

import org.dselent.course_load_scheduler.client.model.StartTime;
import org.dselent.course_load_scheduler.client.model.User;

public class ReceiveStartTimesAction extends Action
{
	private User model;
	private ArrayList<StartTime> startTimes;
	
	public ReceiveStartTimesAction(User model, ArrayList<StartTime> startTimes)
	{
		this.model = model;
		this.startTimes = startTimes;
	}

	public User getModel()
	{
		return model;
	}

	public void setModel(User model)
	{
		this.model = model;
	}
	
	public ArrayList<StartTime> getStartTimes() {
		return startTimes;
	}

	@Override
	public String toString()
	{
		StringBuilder builder = new StringBuilder();
		builder.append("ReceiveStartTimesAction [model=");
		builder.append(model);
		builder.append("] [startTimes=");
		builder.append(startTimes);
		builder.append("]");
		return builder.toString();
	}
}