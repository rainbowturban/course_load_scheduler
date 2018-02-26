package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendRemoveScheduleAction;
import org.dselent.course_load_scheduler.client.event_handler.SendRemoveScheduleEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class SendRemoveScheduleEvent extends GwtEvent<SendRemoveScheduleEventHandler>{
	public static Type<SendRemoveScheduleEventHandler> TYPE = new Type<SendRemoveScheduleEventHandler>();
	
	private SendRemoveScheduleAction action;
	
	public SendRemoveScheduleEvent(SendRemoveScheduleAction action)
	{
		this.action = action;
	}
	
	public SendRemoveScheduleAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SendRemoveScheduleEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendRemoveScheduleEventHandler handler)
	{
		handler.onSendRemoveSchedule(this);
	}
}
