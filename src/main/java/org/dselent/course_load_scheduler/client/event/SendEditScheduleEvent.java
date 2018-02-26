package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendEditScheduleAction;
import org.dselent.course_load_scheduler.client.event_handler.SendEditScheduleEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class SendEditScheduleEvent extends GwtEvent<SendEditScheduleEventHandler>{
	public static Type<SendEditScheduleEventHandler> TYPE = new Type<SendEditScheduleEventHandler>();
	
	private SendEditScheduleAction action;
	
	public SendEditScheduleEvent(SendEditScheduleAction action)
	{
		this.action = action;
	}
	
	public SendEditScheduleAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SendEditScheduleEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendEditScheduleEventHandler handler)
	{
		handler.onSendEditSchedule(this);
	}
}
