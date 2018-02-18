package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.LoadCreateAccountAction;
import org.dselent.course_load_scheduler.client.event_handler.LoadCreateAccountEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class LoadCreateAccountEvent extends GwtEvent<LoadCreateAccountEventHandler>{
	public static Type<LoadCreateAccountEventHandler> TYPE = new Type<LoadCreateAccountEventHandler>();
	
	private LoadCreateAccountAction action;
	
	public LoadCreateAccountEvent(LoadCreateAccountAction action)
	{
		this.action = action;
	}
	
	public LoadCreateAccountAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<LoadCreateAccountEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(LoadCreateAccountEventHandler handler)
	{
		handler.onLoadCreateAccount(this);
	}

}
