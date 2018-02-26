package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveAddScheduleAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveAddScheduleEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class ReceiveAddScheduleEvent extends GwtEvent<ReceiveAddScheduleEventHandler>{
	public static Type<ReceiveAddScheduleEventHandler> TYPE = new Type<ReceiveAddScheduleEventHandler>();
	
	private ReceiveAddScheduleAction action;
	
	public ReceiveAddScheduleEvent(ReceiveAddScheduleAction action)
	{
		this.action = action;
	}
	
	public ReceiveAddScheduleAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveAddScheduleEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveAddScheduleEventHandler handler)
	{
		handler.onReceiveAddSchedule(this);
	}

}
