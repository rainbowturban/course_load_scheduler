package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveLoginAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveLoginEventHandler;
import com.google.gwt.user.client.ui.HasWidgets;

public class ReceiveLoginEvent extends DisplayEvent<ReceiveLoginAction, ReceiveLoginEventHandler>
{
	public static Type<ReceiveLoginEventHandler> TYPE = new Type<ReceiveLoginEventHandler>();
	
	public ReceiveLoginEvent(ReceiveLoginAction action, HasWidgets container)
	{
		super(action, container);
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
}
