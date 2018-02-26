package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendGetAllScheduleAction;
import org.dselent.course_load_scheduler.client.event_handler.SendGetAllScheduleEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendGetAllScheduleEvent extends GwtEvent<SendGetAllScheduleEventHandler>{
	public static Type<SendGetAllScheduleEventHandler> TYPE = new Type<SendGetAllScheduleEventHandler>();
	
	private SendGetAllScheduleAction action;
	
	public SendGetAllScheduleEvent(SendGetAllScheduleAction action)
	{
		this.action = action;
	}
	
	public SendGetAllScheduleAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SendGetAllScheduleEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendGetAllScheduleEventHandler handler)
	{
		handler.onSendGetAllSchedule(this);
	}
}
