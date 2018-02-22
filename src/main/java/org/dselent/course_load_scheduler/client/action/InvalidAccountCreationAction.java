package org.dselent.course_load_scheduler.client.action;

import java.util.ArrayList;
import java.util.List;

/**
 * Actions are used to package up data to be sent on the event bus
 * This particular action is for data related to an invalid login attempt caught client-side
 * 
 * @author dselent
 *
 */
public class InvalidAccountCreationAction extends Action
{
	private List<String> reasonList;
	
	public InvalidAccountCreationAction()
	{
		reasonList = new ArrayList<>();
	}
	
	public InvalidAccountCreationAction(List<String> reasonList)
	{
		this.reasonList = reasonList;
	}

	public InvalidAccountCreationAction(String reason)
	{
			reasonList = new ArrayList<>();
			reasonList.add(reason);
	}
	public boolean addReasons(List<String> reasonList)
	{
		return reasonList.addAll(reasonList);
	}
	
	public void addReason(String reason)
	{
		reasonList.add(reason);
	}
	
	public String getReason(int index)
	{
		return reasonList.get(index);
	}
	
	public int getNumberOfReasons()
	{
		return reasonList.size();
	}
	
	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();
		
		for(String reason : reasonList)
		{
			sb.append(reason);
			sb.append("\n");
		}
		
		return sb.toString();
	}
}
