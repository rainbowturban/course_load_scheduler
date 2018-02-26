package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendAddScheduleAction;
import org.dselent.course_load_scheduler.client.event_handler.SendAddScheduleEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class SendAddScheduleEvent extends GwtEvent<SendAddScheduleEventHandler>{
	public static Type<SendAddScheduleEventHandler> TYPE = new Type<SendAddScheduleEventHandler>();
	
	private SendAddScheduleAction action;
	
	public SendAddScheduleEvent(SendAddScheduleAction action)
	{
		this.action = action;
	}
	
	public SendAddScheduleAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SendAddScheduleEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendAddScheduleEventHandler handler)
	{
		handler.onSendAddSchedule(this);
	}
}
