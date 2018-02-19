package org.dselent.course_load_scheduler.client.event;
import org.dselent.course_load_scheduler.client.action.LoadSchedulePageAction;
import org.dselent.course_load_scheduler.client.event_handler.LoadSchedulePageEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class LoadSchedulePageEvent extends GwtEvent<LoadSchedulePageEventHandler>{
	public static Type<LoadSchedulePageEventHandler> TYPE = new Type<LoadSchedulePageEventHandler>();
	
	private LoadSchedulePageAction action;
	
	public LoadSchedulePageEvent(LoadSchedulePageAction action)
	{
		this.action = action;
	}
	
	public LoadSchedulePageAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<LoadSchedulePageEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(LoadSchedulePageEventHandler handler)
	{
		handler.onLoadSchedulePage(this);
	}

}
