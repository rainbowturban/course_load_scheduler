package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.LoadHomePageAction;
import org.dselent.course_load_scheduler.client.event_handler.LoadHomePageEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class LoadHomePageEvent extends GwtEvent<LoadHomePageEventHandler>{
	public static Type<LoadHomePageEventHandler> TYPE = new Type<LoadHomePageEventHandler>();
	
	private LoadHomePageAction action;
	
	public LoadHomePageEvent(LoadHomePageAction action)
	{
		this.action = action;
	}
	
	public LoadHomePageAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<LoadHomePageEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(LoadHomePageEventHandler handler)
	{
		handler.onLoadHomePage(this);
	}

}
