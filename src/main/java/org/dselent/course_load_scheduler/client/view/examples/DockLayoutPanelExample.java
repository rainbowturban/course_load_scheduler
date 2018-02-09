package org.dselent.course_load_scheduler.client.view.examples;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.DockLayoutPanel;

public class DockLayoutPanelExample extends Composite{

	private static DockLayoutPanelUiBinder uiBinder = GWT.create(DockLayoutPanelUiBinder.class);
	@UiField Button westButton;
	@UiField Button northButton;
	@UiField Button eastButton;
	@UiField Button southButton;
	@UiField Button centerButton;
	@UiField DockLayoutPanel dockPanel;

	interface DockLayoutPanelUiBinder extends UiBinder<Widget, DockLayoutPanelExample> {
	}

	public DockLayoutPanelExample() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	

}
