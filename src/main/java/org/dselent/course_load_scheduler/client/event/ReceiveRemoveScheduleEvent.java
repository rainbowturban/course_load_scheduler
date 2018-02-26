package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveRemoveScheduleAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveRemoveScheduleEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class ReceiveRemoveScheduleEvent extends GwtEvent<ReceiveRemoveScheduleEventHandler>{
	public static Type<ReceiveRemoveScheduleEventHandler> TYPE = new Type<ReceiveRemoveScheduleEventHandler>();
	
	private ReceiveRemoveScheduleAction action;
	
	public ReceiveRemoveScheduleEvent(ReceiveRemoveScheduleAction action)
	{
		this.action = action;
	}
	
	public ReceiveRemoveScheduleAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveRemoveScheduleEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveRemoveScheduleEventHandler handler)
	{
		handler.onReceiveRemoveSchedule(this);
	}

}
