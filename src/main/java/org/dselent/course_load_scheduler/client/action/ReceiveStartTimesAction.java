package org.dselent.course_load_scheduler.client.action;

import java.util.ArrayList;

import org.dselent.course_load_scheduler.client.model.StartTime;
import org.dselent.course_load_scheduler.client.model.User;

import com.google.gwt.user.client.Window;

public class ReceiveStartTimesAction extends Action
{
	private ArrayList<StartTime> startTimes;
	
	public ReceiveStartTimesAction(ArrayList<StartTime> startTimes)
	{
		this.startTimes = startTimes;
	}
	
	public ArrayList<StartTime> getStartTimes() {
		Window.alert(startTimes.toString());
		return startTimes;
	}

	@Override
	public String toString()
	{
		StringBuilder builder = new StringBuilder();
		builder.append("ReceiveStartTimesAction [startTimes=");
		builder.append(startTimes);
		builder.append("]");
		return builder.toString();
	}
}