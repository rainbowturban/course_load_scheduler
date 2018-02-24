package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveEditSectionAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveEditSectionEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveEditSectionEvent extends GwtEvent<ReceiveEditSectionEventHandler>{
	public static Type<ReceiveEditSectionEventHandler> TYPE = new Type<ReceiveEditSectionEventHandler>();
	
	private ReceiveEditSectionAction action;
	
	public ReceiveEditSectionEvent(ReceiveEditSectionAction action)
	{
		this.action = action;
	}
	
	public ReceiveEditSectionAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveEditSectionEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveEditSectionEventHandler handler)
	{
		handler.onReceiveEditSection(this);
	}

}
