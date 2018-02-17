package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.LoadCalendarAction;
import org.dselent.course_load_scheduler.client.event_handler.LoadCalendarEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class LoadCalendarEvent extends GwtEvent<LoadCalendarEventHandler>{
	public static Type<LoadCalendarEventHandler> TYPE = new Type<LoadCalendarEventHandler>();

	private LoadCalendarAction action;

	public LoadCalendarEvent(LoadCalendarAction action)
	{
		this.action = action;
	}

	public LoadCalendarAction getAction()
	{
		return action;
	}

	/*
	 * 
	 */
	@Override
	public Type<LoadCalendarEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(LoadCalendarEventHandler handler)
	{
		handler.onLoadCalendar(this);
	}

}
