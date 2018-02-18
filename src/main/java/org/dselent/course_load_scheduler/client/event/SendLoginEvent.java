package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendLoginAction;
import org.dselent.course_load_scheduler.client.event_handler.SendLoginEventHandler;

import com.google.gwt.user.client.ui.HasWidgets;

public class SendLoginEvent extends DisplayEvent<SendLoginAction, SendLoginEventHandler>
{
	public static Type<SendLoginEventHandler> TYPE = new Type<SendLoginEventHandler>();
	
	public SendLoginEvent (SendLoginAction action, HasWidgets container)
	{
		super(action, container);
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
}
