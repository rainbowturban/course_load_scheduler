package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.LoadAddSectionAction;
import org.dselent.course_load_scheduler.client.event_handler.LoadAddSectionEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class LoadAddSectionEvent extends GwtEvent<LoadAddSectionEventHandler>{
	public static Type<LoadAddSectionEventHandler> TYPE = new Type<LoadAddSectionEventHandler>();
	
	private LoadAddSectionAction action;
	
	public LoadAddSectionEvent(LoadAddSectionAction action)
	{
		this.action = action;
	}
	
	public LoadAddSectionAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<LoadAddSectionEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(LoadAddSectionEventHandler handler)
	{
		handler.onLoadAddSection(this);
	}

}
