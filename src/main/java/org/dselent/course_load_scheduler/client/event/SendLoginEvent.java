package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendLoginAction;
import org.dselent.course_load_scheduler.client.event_handler.SendLoginEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendLoginEvent extends GwtEvent<SendLoginEventHandler>//DisplayEvent<SendLoginAction, SendLoginEventHandler>
{
	private SendLoginAction action;
	
	public static Type<SendLoginEventHandler> TYPE = new Type<SendLoginEventHandler>();
	
	public SendLoginEvent (SendLoginAction action)//, HasWidgets container)
	{
		this.action = action;//super(action, container);
	}

	@Override
	public Type<SendLoginEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	
	@Override
	protected void dispatch(SendLoginEventHandler handler)
	{
		handler.onSendLogin(this);
	}
	
	public SendLoginAction getAction() {
		return action;
	}
	
}
