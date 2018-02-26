package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveLoginAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveLoginEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveLoginEvent extends GwtEvent<ReceiveLoginEventHandler>//DisplayEvent<ReceiveLoginAction, ReceiveLoginEventHandler>
{
	private ReceiveLoginAction action;
	
	public static Type<ReceiveLoginEventHandler> TYPE = new Type<ReceiveLoginEventHandler>();
	
	public ReceiveLoginEvent(ReceiveLoginAction action)//, HasWidgets container)
	{
		this.action = action;//super(action, container);
	}
	
	@Override
	public Type<ReceiveLoginEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(ReceiveLoginEventHandler handler)
	{
		handler.onReceiveLogin(this);
	}
	
	public ReceiveLoginAction getAction() {
		return action;
	}
	
	public void setAction(ReceiveLoginAction action) {
		this.action = action;
	}
}
