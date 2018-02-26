package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveGetAllScheduleAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveGetAllScheduleEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class ReceiveGetAllScheduleEvent extends GwtEvent<ReceiveGetAllScheduleEventHandler>{
	public static Type<ReceiveGetAllScheduleEventHandler> TYPE = new Type<ReceiveGetAllScheduleEventHandler>();
	
	private ReceiveGetAllScheduleAction action;
	
	public ReceiveGetAllScheduleEvent(ReceiveGetAllScheduleAction action)
	{
		this.action = action;
	}
	
	public ReceiveGetAllScheduleAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveGetAllScheduleEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveGetAllScheduleEventHandler handler)
	{
		handler.onReceiveGetAllSchedule(this);
	}

}
