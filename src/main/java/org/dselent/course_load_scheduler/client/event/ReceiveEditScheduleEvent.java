package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveEditScheduleAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveEditScheduleEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveEditScheduleEvent extends GwtEvent<ReceiveEditScheduleEventHandler>{
	public static Type<ReceiveEditScheduleEventHandler> TYPE = new Type<ReceiveEditScheduleEventHandler>();
	
	private ReceiveEditScheduleAction action;
	
	public ReceiveEditScheduleEvent(ReceiveEditScheduleAction action)
	{
		this.action = action;
	}
	
	public ReceiveEditScheduleAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveEditScheduleEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveEditScheduleEventHandler handler)
	{
		handler.onReceiveEditSchedule(this);
	}

}
