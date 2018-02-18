package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.LoadScheduleAction;
import org.dselent.course_load_scheduler.client.event_handler.LoadScheduleEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class LoadScheduleEvent extends GwtEvent<LoadScheduleEventHandler>{
	public static Type<LoadScheduleEventHandler> TYPE = new Type<LoadScheduleEventHandler>();
	
	private LoadScheduleAction action;
	
	public LoadScheduleEvent(LoadScheduleAction action)
	{
		this.action = action;
	}
	
	public LoadScheduleAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<LoadScheduleEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(LoadScheduleEventHandler handler)
	{
		handler.onLoadSchedulePage(this);
	}

}
