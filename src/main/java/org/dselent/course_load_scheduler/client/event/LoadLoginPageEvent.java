package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.LoadLoginPageAction;
import org.dselent.course_load_scheduler.client.event_handler.LoadLoginPageEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class LoadLoginPageEvent extends GwtEvent<LoadLoginPageEventHandler>{
	public static Type<LoadLoginPageEventHandler> TYPE = new Type<LoadLoginPageEventHandler>();

	private LoadLoginPageAction action;

	public LoadLoginPageEvent(LoadLoginPageAction action)
	{
		this.action = action;
	}

	public LoadLoginPageAction getAction()
	{
		return action;
	}

	@Override
	public Type<LoadLoginPageEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(LoadLoginPageEventHandler handler)
	{
		handler.onLoadLoginPage(this);
	}

}
